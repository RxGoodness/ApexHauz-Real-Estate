import { z } from "zod";

const PropertySchema = z.object({
  //id: z.number(),
  owner: z.number(),
  status: z.string(),
  price: z.number(),
  state: z.string(),
  city: z.string(),
  address: z.string(),
  type: z.string(),
  image_url: z.string(),
  created_on: z.string()
});

const ReportSchema = z.object({
 // id: z.number(),
  property_id: z.number(),
  created_on: z.string(),
  reason: z.string(),
  description: z.string()
});

const UserSchema = z.object({
  is_admin: z.enum(["admin", "user"]),
  email: z.string().email({ message: "Invalid email address" }),
  first_name: z.string(),
  last_name: z.string(),
//  id: z.number(),
  phone: z.string(),
  password: z.string().min(8),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export { PropertySchema, ReportSchema, LoginSchema, UserSchema };
