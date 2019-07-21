import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        defaultChecked
        value="checkedF"
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    </div>
  );
}