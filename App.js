import  { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'


function App() {
  const [openPicker, authResponse] = useDrivePicker();  
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId: "17076620649-37ktbunrpcgkrlaa6dnucp86965ocj5q.apps.googleusercontent.com",
      developerKey: "AIzaSyCHmr73-ECLVS7l3oZG568fstlQNAEnP90",
        token: "ya29.a0AfB_byAAZO7O6EDz0E9IehFl3he8-4j0tiV-mziBOPmHn99Q1p0blyi0pqSqOgI5_kuuKOjMfffnGeIp0lf4pTbokFmNRn5iStFafU1VUXOhXiFOrWpNqcgqlMNOJiaeco8yMzIE0J3N0i2gR2S07Y5R",
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data)
      },
    })
  }


  
  return (
    <div>
        <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );
}

export default App;