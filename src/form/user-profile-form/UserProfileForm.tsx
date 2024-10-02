import { z } from "zod";
import  { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import LoadingButton from "../../components/LoadingButton";
import { Button } from "../../components/ui/button";
import { User } from "@/types";

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, { message: "Name is required" }), // Custom message here
    addressLine1: z.string().min(1, { message: "Address Line 1 is required" }), // Custom message
    city: z.string().min(1, { message: "City is required" }), // Custom message
    country: z.string().min(1, { message: "Country is required" }), 
});

type userFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser:User
  onSave: (userProfileData: userFormData) => void;
  isLoading: boolean;
};

const UserProfileForm = ({ currentUser,onSave, isLoading }: Props) => {
  const form = useForm<userFormData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit", // Triggers validation on submit,
    defaultValues:currentUser
    
  });

  useEffect(()=>{
    form.reset(currentUser)
  },[currentUser,form])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold">User Profile Form</h2>
          <FormDescription>
            View and Change Your Profile Information here
          </FormDescription>
        </div>

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""}  disabled className="bg-white" />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="font-bold">Name</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""}  className="bg-white" />
              </FormControl>
              {/* Display validation message */}
              <FormMessage>{form.formState.errors.name?.message}</FormMessage>
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-4">
          {/* Address Line 1 Field */}
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-bold">Address Line 1</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""}  className="bg-white" />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.addressLine1?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* City Field */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-bold">City</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} className="bg-white" />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.city?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* Country Field */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-bold">Country</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""}  className="bg-white" />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.country?.message}
                </FormMessage>
              </FormItem>
            )}
          />
        </div>

        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-orange-500">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
