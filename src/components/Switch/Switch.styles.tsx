import { Switch, lighten, withStyles } from '@material-ui/core'

export const StyledSwitch = withStyles({
  switchBase: {
    color: lighten('#0299a2', 0.7),
    '& + $track': {
      backgroundColor: '#a0a0a0',
    },
    '&$checked': {
      color: '#0299a2',
    },
    '&$checked + $track': {
      backgroundColor: '#0299a2',
    },
  },
  checked: {},
  track: {},
})(Switch)
