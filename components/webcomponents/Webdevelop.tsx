import { Tabs } from '@radix-ui/react-tabs'
import React from 'react'
import { TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { ScrollArea } from '../ui/scroll-area'
import { motion } from 'framer-motion'
import Frontend from './Frontend'
import ReactProject from './ReactProject'
import NextProject from './NextProject'
import FullStack from './FullStack'


export default function Webdevelop() {
  return (
    <div>
        <div>
            <h2 className="text-2xl font-bold mb-4">Web Development</h2>
            <p className="text-sm text-muted-foreground mt-2 mb-4">
              Web development is the process of creating and maintaining websites and web applications. It involves a combination of programming, design, and content creation to build functional and visually appealing online experiences.
            </p>
            <div>
                <Tabs defaultValue="frontend1" className="w-full">
                    <TabsList className="w-full mb-4 gap-2">
                        <TabsTrigger value="frontend1">Front End(React JS)</TabsTrigger>
                        <TabsTrigger value="frontend2">Front End(Next JS)</TabsTrigger>
                        <TabsTrigger value="fullstack">Full-Stack</TabsTrigger>
                    </TabsList>

                    {/* <TabsContent value="frontend" className="w-full">
                        <ScrollArea className="h-[500px] w-full rounded-md ">
                              <motion.div initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: 0.2, duration: .2, ease: "easeIn" },
                                }} className="w-full">

                                <div>
                                    <Frontend />
                                </div>
                              </motion.div>
                            </ScrollArea>
                    </TabsContent> */}
                    <TabsContent value="frontend1" className="w-full">
                        <ScrollArea className="h-[500px] w-full rounded-md ">
                              <motion.div initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: 0.2, duration: .2, ease: "easeIn" },
                                }} className="w-full">

                                <div>
                                    <ReactProject />
                                </div>
                              </motion.div>
                            </ScrollArea>
                    </TabsContent>
                    <TabsContent value="frontend2" className="w-full">
                        <ScrollArea className="h-[500px] w-full rounded-md ">
                              <motion.div initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: 0.2, duration: .2, ease: "easeIn" },
                                }} className="w-full">

                                <div>
                                    <NextProject />
                                </div>
                              </motion.div>
                            </ScrollArea>
                    </TabsContent>


                    <TabsContent value="fullstack" className="w-full">
                        <ScrollArea className="h-[500px] w-full rounded-md ">
                              <motion.div initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: 0.2, duration: .2, ease: "easeIn" },
                                }} className="w-full">

                                <div>
                                    <FullStack />
                                </div>
                              </motion.div>
                            </ScrollArea>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>
  )
}
