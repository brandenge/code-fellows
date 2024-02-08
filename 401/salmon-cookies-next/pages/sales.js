import Head from 'next/head'
import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Store from '../store';
import Link from 'next/link';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Button from'@mui/material/Button';
import Nav from '../components/Nav';

function createData(store) {
  return { name: store.name, ...store.cookieSoldPerHour, total: store.totalCookiesSold };
}
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

export default function Sales() {
  const [storeName, setStoreName] = useState('');
  const [minimumCustomers, setMinimumCustomers] = useState('');
  const [maximumCustomers, setMaximumCustomers] = useState('');
  const [averageCookies, setAverageCookies] = useState('');
  const [stores, setStores] = useState([
    createData(new Store('Seattle', 23, 65, 6.3)),
    createData(new Store('Tokyo', 3, 24, 1.2)),
    createData(new Store('Dubai', 11, 20, 3.7)),
    createData(new Store('Paris', 20, 38, 2.3)),
    createData(new Store('Lima', 2, 16, 4.6)),
  ]);

  const handleStoreName = (e) => {
    setStoreName(e.target.value);
  };

  const handleMinimumCustomers = (e) => {
    setMinimumCustomers(e.target.value);
  };

  const handleMaximumCustomers = (e) => {
    setMaximumCustomers(e.target.value);
  };

  const handleAverageCookies = (e) => {
    setAverageCookies(e.target.value);
  };

  const handleStoreUpdate = () => {
    setStores([
      ...stores.filter(store => store.name !== storeName),
      createData(new Store(
        storeName,
        minimumCustomers,
        maximumCustomers,
        averageCookies
      ))
    ]);
  };

  return (
<>
  <Nav />
    <div className="container">
      <Head>
        <title>Salmon Cookies Sales</title>
      </Head>
      <header>
        <h1>Salmon Cookies Sales</h1>
        {/* <nav>
          <h2><Link href="/">Home</Link></h2>
          <h2><Link href="/sales">Sales</Link></h2>
        </nav> */}
      </header>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Store</TableCell>
            {hours.map(hour => <TableCell align='right' key={`header-${hour}`}>{hour}</TableCell>)}
            <TableCell align="right">Total Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stores.map((store) => (
            <TableRow
              key={store.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {store.name}
              </TableCell>
              {hours.map(hour => <TableCell align='right' key={`${store.name}-${hour}`}>{store[hour]}</TableCell>)}
              <TableCell align="right">{store.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

<form>
  <FormControl>
    <InputLabel htmlFor="store-name">Store Name</InputLabel>
    <Input id="store-name" value={storeName} onChange={handleStoreName} aria-describedby="store-name-helper-text" />
    <FormHelperText id="store-name-helper-text">The new or current store name.</FormHelperText>
  </FormControl>

  <FormControl>
    <InputLabel htmlFor="min-customers">Minimum Customers</InputLabel>
    <Input id="min-customers" value={minimumCustomers} onChange={handleMinimumCustomers} aria-describedby="min-customers-helper-text" />
    <FormHelperText id="min-customers-helper-text">The minimum number of customers.</FormHelperText>
  </FormControl>

  <FormControl>
    <InputLabel htmlFor="max-customers">Maximum Customers</InputLabel>
    <Input id="max-customers" value={maximumCustomers} onChange={handleMaximumCustomers} aria-describedby="max-customers-helper-text" />
    <FormHelperText id="max-customers-helper-text">The maximum number of customers.</FormHelperText>
  </FormControl>

  <FormControl>
    <InputLabel htmlFor="average-cookies">Average Cookies</InputLabel>
    <Input id="average-cookies" value={averageCookies} onChange={handleAverageCookies} aria-describedby="average-cookies-helper-text" />
    <FormHelperText id="average-cookies-helper-text">The average number of cookies sold per customer.</FormHelperText>
  </FormControl>
  <Button onClick={handleStoreUpdate}>Add Store</Button>
</form>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
      `}</style>
    </div>

    </>
  )
}
