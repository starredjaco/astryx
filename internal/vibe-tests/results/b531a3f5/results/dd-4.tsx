// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';

export default function UserProfile() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-16 w-16">
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">Jane Smith</h2>
          <p className="text-sm text-muted-foreground">Product Designer</p>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader><CardTitle>About</CardTitle></CardHeader>
            <CardContent>
              <p>Senior Product Designer with 8 years of experience in design systems.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activity">
          <div className="space-y-3">
            <div className="py-3 border-b">
              <p className="font-semibold">Updated profile photo</p>
              <p className="text-sm text-muted-foreground">2 hours ago</p>
            </div>
            <div className="py-3 border-b">
              <p className="font-semibold">Completed project milestone</p>
              <p className="text-sm text-muted-foreground">Yesterday</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader><CardTitle>Account Settings</CardTitle></CardHeader>
            <CardContent><p>Manage your account preferences.</p></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
