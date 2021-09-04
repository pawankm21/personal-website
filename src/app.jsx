import React from 'react';
import { FileIcon, FolderIcon} from './fileicons';
import Terminal from './terminal';
import TaskBar from './taskbar';
function App() {
    return (
      <div>
        <TaskBar></TaskBar>
        <FolderIcon icon="folder" name="Projects"></FolderIcon>
        <FolderIcon icon="folder" name="Achievements"></FolderIcon>
        <FileIcon icon="text" name="About me"></FileIcon>
        <FileIcon icon="text" name="Contact Me"></FileIcon>
        <Terminal></Terminal>
      </div>
    );

}
export default App;