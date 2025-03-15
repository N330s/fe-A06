'use client'

import DateReserve from "@/components/DateReserve";
import FormControl from "@mui/material/FormControl";
import { Menu, TextField } from "@mui/material";
import {Select, MenuItem} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export default function Booking () {
    return (
        <main>
            <FormControl>
                <TextField variant = 'standard' name = 'Name-Lastname' label = 'Name-Lastname'/>
                <TextField variant = 'standard' name = 'Contact-Number' label = 'Contact-Number'/>
                <Select id = 'venue' variant = 'standard' name = 'venue'>
                    <MenuItem value = 'Bloom'>The Bloom Pavilion</MenuItem>
                    <MenuItem value = 'Spark'>Spark Space</MenuItem>
                    <MenuItem value = 'GrandTable'>The Grand Table</MenuItem>
                </Select>
                <DateReserve/>
                <button className ='black rounded-md bg-sky-600 hover:indigo-600' name = 'Book Venue'>
                    Book Venue
                </button>
            </FormControl>
        </main>
    );
}