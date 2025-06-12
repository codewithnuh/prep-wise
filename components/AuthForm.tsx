"use client";
import React from "react";
import { string, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
const formSchema = z.object({});
type FromType = {
  type: "signIn" | "signUp";
};
const AuthForm = ({ type }: FromType) => {
  const isSignIn = type == "signIn";
  const isSignUp = type == "signUp";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: string,
    },
  });
  return (
    <div className="card-border lg:min-w-[556px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center ">
          <Image
            src={"/logo.svg"}
            alt="Prepwise"
            aria-label="PrepWise Logo"
            height={32}
            width={32}
          />
          <h2 className="text-primary-100">PrepWise</h2>
        </div>
        <Form {...form}>
          <form>
            <FormField
              name="user"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
