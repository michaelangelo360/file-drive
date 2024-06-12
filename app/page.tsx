"use client"

import { Button } from "@/components/ui/button";

import { SignIn, SignInButton,SignedOut, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import { api } from "../convex/_generated/api"
import { useMutation, useQuery } from "convex/react";

export default function Home() {

  const Files = useQuery(api.file.getFiles)

  const createFile = useMutation(api.file.createFile);

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>

      <SignOutButton>

              <Button>SignOut</Button>  
      </SignOutButton>

      </SignedIn>

      <SignedOut>

      <SignInButton mode="modal"> 

      <Button>SignIn</Button>

      </SignInButton>

      </SignedOut>

      {Files?.map((file)=>{
        return <div key={file._id}>{file.name}</div>;
      })}

      <Button onClick={()=>{
        createFile({
          name:"hello world",
        });
      }}>click me </Button>
    </main>
  );
}
