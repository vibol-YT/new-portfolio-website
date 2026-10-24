"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoginPage from "@/components/layouts/LoginPage";
import { ScrollArea } from "@/components/ui/scroll-area";
import Profile from "@/components/layouts/Profile";
import Webdevelop from "@/components/webcomponents/Webdevelop";
import System from "@/components/SystemComponents/System";
import UiComponents from "@/components/UX/UI/UiComponents";




export default function Resume() {
  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 1.6, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center w-full px-4 lg:px-0"
      >
        <div className="max-w-6xl mx-auto w-full">
          <Tabs defaultValue="login" className="flex flex-col lg:flex-row gap-12 mt-10">
            <TabsList className="flex flex-col w-full lg:w-100 mx-auto lg:mx-0 transition-all duration-300 gap-6">
              <TabsTrigger value="login">Components</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="system">System Development</TabsTrigger>
              <TabsTrigger value="ux/ui">UX/UI Design</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              {/* login */}
              <TabsContent value="login" className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.2, duration: .2, ease: "easeIn" },
                  }}
                  className="flex flex-col gap-6 text-start xl:text-left ">
                   <h2 className="text-2xl font-bold mb-4">Authentication</h2>
                      <p className="text-sm text-muted-foreground mt-2 mb-4">
                        A login page is a crucial component of any web application that requires user authentication. It serves as the gateway for users to access their accounts and interact with the application features.
                      </p>
                      <div >
                        <Tabs defaultValue="login" className="w-full">
                          <TabsList className="w-full mb-4 gap-2">
                            <TabsTrigger value="login">Auth</TabsTrigger>
                            <TabsTrigger value="profile">Hero</TabsTrigger>

                          </TabsList>

                          {/* Login */}
                          <TabsContent value="login" className="w-full">
                            <ScrollArea className="h-[500px] w-full rounded-md ">
                              <motion.div initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: 0.2, duration: .2, ease: "easeIn" },
                                }} className="w-full">

                                <LoginPage />
                              </motion.div>
                            </ScrollArea>
                          </TabsContent>

                          {/* Hero */}
                          <TabsContent value="profile" className="w-full">
                            <ScrollArea className="h-[500px] w-full rounded-md">
                              <motion.div initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: 0.2, duration: .2, ease: "easeIn" },
                                }}>

                                <Profile />
                              </motion.div>
                            </ScrollArea>
                          </TabsContent>


                          {/* Navbar */}
                          {/* <TabsContent value="navbar" className="w-full">
                            <ScrollArea className="h-[500px] w-full rounded-md">
                              <motion.div initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: 0.2, duration: .2, ease: "easeIn" },
                                }}>

                                <h1>Not Found !</h1>
                              </motion.div>
                            </ScrollArea>
                          </TabsContent> */}


                        </Tabs>
                      </div>
                </motion.div>
              </TabsContent>

              {/* web */}
              <TabsContent value="web" className="w-full">
                <motion.div initial={{ opacity: 0 }} animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.2, ease: "easeIn" }
                }}>
                  <div>
                    {/* Web Development */}
                    <Webdevelop />
                  </div>
                </motion.div>
              </TabsContent>

              {/* system */}
              <TabsContent value="system" className="w-full">
                <motion.div initial={{ opacity: 0 }} animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.2, ease: "easeIn" }
                }}>
                  <div>
                    <System />
                  </div>
                </motion.div>
              </TabsContent>
              {/*  */}
              <TabsContent value="ux/ui" className="w-full">
                <motion.div initial={{ opacity: 0 }} animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.2, ease: "easeIn" }
                }}>
                  <div>
                    <UiComponents />
                  </div>
                </motion.div>
              </TabsContent>
              

            </div>
          </Tabs>
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
