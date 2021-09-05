import React from 'react';
import { FileIcon, FolderIcon} from './fileicons';
import Terminal from './terminal';
import TaskBar from './taskbar';
import Dock from './dock'
function App() {
  
    document.getElementById("terminal");
    return (
      <div id="app">
        <TaskBar></TaskBar>
        <FolderIcon icon="folder" name="Projects"></FolderIcon>
        <FolderIcon icon="folder" name="Achievements"></FolderIcon>
        <FileIcon icon="text" name="About me"></FileIcon>
        <FileIcon icon="text" name="Contact Me"></FileIcon>
        <Terminal></Terminal>
        <Dock></Dock>
      </div>
    );

}
export default App;