
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from './components/select.js'
import Button from '@mui/material/Button';
export default function comment() {
  return (
    <div>
      <div>Add Review</div>
      <div>Title</div>
      <div>
      <TextField fullWidth label="fullWidth" id="fullWidth" />
      </div>
      <div>Comment</div>
      <div>
      <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
      <div>Rating</div>
      <div></div>
      <div>will you recommend this product?</div>
      <div>
        <Select/>
      </div>
      <div>
      <Button variant="outlined">Review</Button>
      </div>

    </div>
  )
}
