import { Tabs } from '@radix-ui/react-tabs'
import React from 'react'

import { motion } from 'framer-motion'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import SimpleUi from './SimpleUi'



export default function UiComponents() {
  return (
    <div>
        <div>
            <h2 className="text-2xl font-bold mb-4">Figma Design</h2>
            <p className="text-sm text-muted-foreground mt-2 mb-4">
              Figma is a powerful design tool that allows designers to create and collaborate on user interface (UI) designs. It provides a wide range of features and capabilities that make it an excellent choice for UI design projects.
            </p>
            <div>
                <Tabs defaultValue="simple" className="w-full">
                    <TabsList className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-4 gap-2">
                        <TabsTrigger value="simple">Simple UI</TabsTrigger>
                        <TabsTrigger value="myproject">My Project</TabsTrigger>
                    </TabsList>

                    <TabsContent value="simple" className="w-full">
                        <ScrollArea className="h-[500px] w-full rounded-md ">
                              <motion.div initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: 0.2, duration: .2, ease: "easeIn" },
                                }} className="w-full">

                                <div>
                                  <SimpleUi />
                                </div>
                              </motion.div>
                            </ScrollArea>
                    </TabsContent>

                    <TabsContent value="myproject" className="w-full">
                        <ScrollArea className="h-[500px] w-full rounded-md ">
                              <motion.div initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: 0.2, duration: .2, ease: "easeIn" },
                                }} className="w-full">

                                <div>
                                  <h1>Not Found !</h1>
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
