import { Tabs } from '@radix-ui/react-tabs'
import React from 'react'
import { TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { ScrollArea } from '../ui/scroll-area'
import { motion } from 'framer-motion'
import Dashboard from './Dashboard'


export default function Webdevelop() {
  return (
    <div>
        <div>
            <h2 className="text-2xl font-bold mb-4">System Development</h2>
            <p className="text-sm text-muted-foreground mt-2 mb-4">
              System development involves creating and maintaining software systems that support business operations. It includes designing, building, testing, and deploying systems that are efficient, scalable, and secure.
            </p>
            <div>
                <Tabs defaultValue="dashborad" className="w-full">
                    <TabsList className="w-full md:w-60 mb-4 gap-2">
                        <TabsTrigger value="dashborad">Dashborad</TabsTrigger>
                    </TabsList>

                    <TabsContent value="dashborad" className="w-full">
                        <ScrollArea className="h-[500px] w-full rounded-md ">
                              <motion.div initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 1,
                                  transition: { delay: 0.2, duration: .2, ease: "easeIn" },
                                }} className="w-full">

                                <div>
                                    <Dashboard />
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
