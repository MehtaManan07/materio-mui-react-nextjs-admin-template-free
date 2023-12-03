// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import useFetchDesigns from 'src/@core/hooks/useFetchDesigns'
import { useMemo } from 'react'

const createDesignData = (name: string, packing: string, type: string, quantity: number, size: string) => {
  return { name, packing, type, quantity, size }
}

const TableBasic = () => {
  const { data } = useFetchDesigns()
  const rowws = useMemo(() => {
    if (!data) return []

    return data.data.map(design => {
      return createDesignData(
        design.design_name,
        design.ProductPacking ? design.ProductPacking.packing_name : 'nil',
        design.ProductType.type_name,
        design.quantity,
        design.ProductSize.size_name
      )
    })
  }, [data])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        {/* {JSON.stringify(Object.keys(data.data[0]))} */}
        <TableHead>
          <TableRow>
            <TableCell>Design name</TableCell>
            <TableCell align='right'>Packing</TableCell>
            <TableCell align='right'>Type</TableCell>
            <TableCell align='right'>Quantity</TableCell>
            <TableCell align='right'>Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowws.map(row => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.packing}</TableCell>
              <TableCell align='right'>{row.type}</TableCell>
              <TableCell align='right'>{row.quantity}</TableCell>
              <TableCell align='right'>{row.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBasic
