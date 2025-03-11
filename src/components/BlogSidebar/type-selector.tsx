'use client'

import { blogTypes } from '@/data/blog-sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu'
import { SidebarMenuButton, SidebarMenuItem } from '@/ui/sidebar'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

export const TypeSelector = () => {
  const [selectedType, setSelectedType] = useState(blogTypes[0])

  if (!selectedType) return null

  // const handleTypeChange = (type: string) => setSelectedType(type)

  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
          >
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-7 items-center justify-center rounded-md">
              <selectedType.icon className="size-4" />
            </div>
            <div className="text-sm font-semibold">{selectedType.name}</div>
            <ChevronsUpDown className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60">
          {blogTypes.map((type) => (
            <DropdownMenuItem
              key={type.name}
              onSelect={() => setSelectedType(type)}
            >
              {type.name}
              {type.name === selectedType.name && <Check className="ml-auto" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  )
}
