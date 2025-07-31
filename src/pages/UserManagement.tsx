import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogClose } from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import UserAPI from "@/api/user.api";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const getRoleClass = (role: string) => {
  switch (role) {
    case "Admin":
      return "bg-red-100 text-red-600";
    case "Recruiter":
      return "bg-blue-100 text-blue-600";
    // case "HR":
    //   return "bg-green-100 text-green-600";
    // case "Consultation":
    //   return "bg-purple-100 text-purple-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const getStatusClass = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700";
    case "Inactive":
      return "bg-gray-200 text-gray-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const UserManagement = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    department: "",
  });
  const [page, setPage] = useState(1);
  const [roleFilter, setRoleFilter] = useState("All");
  const [deptFilter, setDeptFilter] = useState("All");
  const [search, setSearch] = useState("");
  const perPage = 6;

  const [passwordMode, setPasswordMode] = useState<"auto" | "manual">("auto");
  const [manualPassword, setManualPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<any>(null);
  const [userToEdit, setUserToEdit] = useState<any>(null);
  const [visiblePasswords, setVisiblePasswords] = useState<{
    [userId: string]: boolean;
  }>({});

  const queryClient = useQueryClient();
  // Function to generate random password
  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  // Function to generate userId
  const generateUserId = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `user${timestamp}${random}`;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: UserAPI.getAllUsers,
  });

  const { mutate: createUser, isPending: isCreatingUser } = useMutation({
    mutationFn: UserAPI.createUser,
    onSuccess: () => {
      // e.g., invalidate "users" query to refetch updated list
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User created successfully!");

      // Reset form
      setUserData({
        fullName: "",
        email: "",
        phone: "",
        role: "",
        department: "",
      });
      setManualPassword("");
      setPasswordMode("auto");
      setShowPassword(false);

      // Close dialog
      setIsDialogOpen(false);
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to create user");
    },
  });

  // Update User
const {
  mutate: updateUser,
  isPending: isUpdating,
} = useMutation({
  mutationFn:  ({ id, data }: { id: string; data: any }) => UserAPI.updateUser(id, data),
   onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User updated successfully!");
      setUserToEdit(null);
      setIsEditDialogOpen(false);
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to update user");
    },
});

// Delete User
const {
  mutate: deleteUser,
  isPending: isDeleting,
} = useMutation({
  mutationFn: UserAPI.deleteUser,
  onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User deleted successfully!");
      setUserToDelete(null);
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to delete user");
      setUserToDelete(null);
    },
});


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (value: string) => {
    setUserData({ ...userData, role: value });
  };

  const handleDeptChange = (value: string) => {
    setUserData({ ...userData, department: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !userData.fullName ||
      !userData.email ||
      !userData.phone ||
      !userData.role ||
      !userData.department
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-()]+$/;
    if (!phoneRegex.test(userData.phone)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    // Password validation for manual mode
    if (passwordMode === "manual" && !manualPassword) {
      toast.error("Please enter a password");
      return;
    }

    // Prepare user data for API
    const userPayload = {
      userId: generateUserId(),
      fullName: userData.fullName,
      email: userData.email,
      mobile: userData.phone,
      role: userData.role,
      department: userData.department,
      passwordHash:
        passwordMode === "auto" ? generatePassword() : manualPassword,
      status: "Active",
    };

    createUser(userPayload);
  };

  const handleCancel = () => {
    // Reset form
    setUserData({
      fullName: "",
      email: "",
      phone: "",
      role: "",
      department: "",
    });
    setManualPassword("");
    setPasswordMode("auto");
    setShowPassword(false);

    // Close dialog
    setIsDialogOpen(false);
  };

  const handleEditUser = (user: any) => {
    setUserToEdit(user);
    setUserData({
      fullName: user.fullName,
      email: user.email,
      phone: user.mobile,
      role: user.role,
      department: user.department,
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !userData.fullName ||
      !userData.email ||
      !userData.phone ||
      !userData.role ||
      !userData.department
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-()]+$/;
    if (!phoneRegex.test(userData.phone)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    // Prepare user data for API
    const userPayload = {
      fullName: userData.fullName,
      email: userData.email,
      mobile: userData.phone,
      role: userData.role,
      department: userData.department,
    };

    updateUser({id :userToEdit._id, data : userPayload});
  };

  const handleEditCancel = () => {
    setUserToEdit(null);
    setUserData({
      fullName: "",
      email: "",
      phone: "",
      role: "",
      department: "",
    });
    setIsEditDialogOpen(false);
  };

  const handleDeleteUser = (user: any) => {
    setUserToDelete(user);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      deleteUser(userToDelete._id);
    }
  };

  const togglePasswordVisibility = (userId: string) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  const filteredData = data?.users?.filter((user: any) => {
    const matchesSearch = [user.userId, user.fullName, user.email].some(
      (field) => field.toLowerCase().includes(search.toLowerCase())
    );
    const matchesRole = roleFilter === "All" || user.role === roleFilter;
    const matchesDept = deptFilter === "All" || user.dept === deptFilter;
    return matchesSearch && matchesRole && matchesDept;
  });

  const totalPages = Math.ceil(filteredData?.length / perPage);
  const paginatedData = (filteredData ?? []).slice(
    (page - 1) * perPage,
    page * perPage
  );

  useEffect(() => {
    console.log("Fetched Users:", data?.users);
    if (data?.users && data.users.length > 0) {
      console.log("First user structure:", data.users[0]);
      console.log("Available fields:", Object.keys(data.users[0]));
    }
    console.log("Filtered Data:", filteredData);
    console.log("Paginated Data:", paginatedData);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading jobs</div>;

  return (
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">User Management</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Add New User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <form onSubmit={handleSubmit}>
              <DialogTitle className="text-lg font-semibold mb-4">
                Add New User
              </DialogTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="fullName"
                  placeholder="Full Name"
                  value={userData.fullName}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  placeholder="Email ID"
                  value={userData.email}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  placeholder="Mobile Number"
                  value={userData.phone}
                  onChange={handleChange}
                />
                <Select value={userData.role} onValueChange={handleRoleChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Recruiter">Recruiter</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={userData.department}
                  onValueChange={handleDeptChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="IT">IT</SelectItem>
                    <SelectItem value="HR">HR</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-4">
                <label className="flex items-center gap-2">
                  <Checkbox
                    checked={passwordMode === "auto"}
                    onCheckedChange={() => setPasswordMode("auto")}
                  />
                  <span>Auto-generate password</span>
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox
                    checked={passwordMode === "manual"}
                    onCheckedChange={() => setPasswordMode("manual")}
                  />
                  <span>Set manual password</span>
                </label>
              </div>
              {passwordMode === "manual" && (
                <div className="relative mt-2">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={manualPassword}
                    onChange={(e) => setManualPassword(e.target.value)}
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              )}
              <div className="flex justify-end gap-4 mt-4">
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isCreatingUser}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isCreatingUser ? "Adding User..." : "Add User"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Edit User Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <form onSubmit={handleUpdateSubmit}>
              <DialogTitle className="text-lg font-semibold mb-4">
                Edit User
              </DialogTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="fullName"
                  placeholder="Full Name"
                  value={userData.fullName}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  placeholder="Email ID"
                  value={userData.email}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  placeholder="Mobile Number"
                  value={userData.phone}
                  onChange={handleChange}
                />
                <Select value={userData.role} onValueChange={handleRoleChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Recruiter">Recruiter</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={userData.department}
                  onValueChange={handleDeptChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="IT">IT</SelectItem>
                    <SelectItem value="HR">HR</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleEditCancel}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isUpdating}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isUpdating ? "Updating User..." : "Update User"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center bg-gray-200 p-4 rounded-lg">
        <Input
          placeholder="Search by name, email or ID"
          className="w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select value={roleFilter} onValueChange={(val) => setRoleFilter(val)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All Roles" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Roles</SelectItem>
            <SelectItem value="Admin">Admin</SelectItem>
            <SelectItem value="Recruiter">Recruiter</SelectItem>
          </SelectContent>
        </Select>
        <Select value={deptFilter} onValueChange={(val) => setDeptFilter(val)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Departments</SelectItem>
            <SelectItem value="IT">IT</SelectItem>
            <SelectItem value="HR">HR</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="Sales">Sales</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 font-medium">User ID</th>
              <th className="p-3 font-medium">Full Name</th>
              <th className="p-3 font-medium">Email ID</th>
              <th className="p-3 font-medium">Mobile Number</th>
              <th className="p-3 font-medium">Role</th>
              <th className="p-3 font-medium">Department</th>
              <th className="p-3 font-medium">Created On</th>
              <th className="p-3 font-medium">Status</th>
              <th className="p-3 font-medium">Hashed Password</th>
              <th className="p-3 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedData.map((user: any) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="p-3">{user.userId}</td>
                <td className="p-3">{user.fullName}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.mobile}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-xl text-xs font-medium ${getRoleClass(
                      user.role
                    )}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="p-3">{user.department}</td>
                <td className="p-3">
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-xl text-xs font-medium ${getStatusClass(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-3">
                  <span>
                    {visiblePasswords[user._id]
                      ? user.passwordHash || "No password"
                      : user.passwordHash
                      ? "••••••••"
                      : "No password"}
                  </span>
                </td>
                <td className="p-3 flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleEditUser(user)}
                  >
                    <Pencil className="w-4 h-4 text-blue-600" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => togglePasswordVisibility(user._id)}
                  >
                    {visiblePasswords[user._id] ? (
                      <EyeOff className="w-4 h-4 text-green-600" />
                    ) : (
                      <Eye className="w-4 h-4 text-green-600" />
                    )}
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDeleteUser(user)}
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the user{" "}
                          <strong>{userToDelete?.fullName}</strong> and remove
                          their data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={confirmDelete}
                          className="bg-red-600 hover:bg-red-700 text-white"
                          disabled={isDeleting}
                        >
                          {isDeleting ? "Deleting..." : "Delete"}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>
        <span className="px-3 py-2 text-sm">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default UserManagement;
