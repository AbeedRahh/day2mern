import { TableBody, TableCell, TableContainer, TableRow,TableHead,Table } from '@mui/material'
import React from 'react'

const Tabs = () => {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name </TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
        
        <TableBody>
            <TableRow>
                <TableCell>abeed</TableCell>
                <TableCell>19</TableCell>
                <TableCell>vallam</TableCell>
            </TableRow>
            </TableBody></Table>
      </TableContainer>
    </div>
  )
}

export default Tabs
