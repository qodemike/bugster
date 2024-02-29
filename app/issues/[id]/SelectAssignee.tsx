"use client";

import { Select } from '@radix-ui/themes'
import React from 'react'

const SelectAssignee = () => {
  return (
    <Select.Root>
        <Select.Trigger placeholder="Assign to ..."/>
        <Select.Content>
            <Select.Group>
                <Select.Label>Suggestions</Select.Label>
                <Select.Item value="1">Meek bronsen</Select.Item>
            </Select.Group>
        </Select.Content>
    </Select.Root>
  )
}

export default SelectAssignee