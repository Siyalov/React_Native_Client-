import * as React from 'react';
import { TouchableOpacity, Checkbox} from 'react-native-paper';

export default function Clients({navigation}) {
  const [checked, setChecked] = React.useState(false);


  return (
    <TouchableOpacity icon="camera" mode="container" onPress={() => navigation.navigate('ClientDetails')}>
      Press me
    </TouchableOpacity>
  );
}