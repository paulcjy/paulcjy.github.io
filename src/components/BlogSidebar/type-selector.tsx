'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu'
import { SidebarMenuButton, SidebarMenuItem } from '@/ui/sidebar'
import { Check, ChevronDown, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

export const TypeSelector = () => {
  const [selectedType, setSelectedType] = useState('Category')

  // const handleTypeChange = (type: string) => setSelectedType(type)

  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            size="lg"
            className="text-md data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer font-medium"
          >
            {selectedType}
            <ChevronsUpDown className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60">
          {['Category', 'Tag', 'Daily Record'].map((type) => (
            <DropdownMenuItem key={type} onSelect={() => setSelectedType(type)}>
              {type}
              {type === selectedType && <Check className="ml-auto" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  )
}
