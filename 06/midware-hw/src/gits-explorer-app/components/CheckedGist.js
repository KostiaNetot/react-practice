import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedGists } from "../redux/actions";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import store from "../redux/storeConfig";

const codeString = '# For complete examples and data files, please go to https://github.com/aspose-tasks-cloud/aspose-tasks-cloud-python\n' +
  'filename = \'VbaProject3.mpp\'\n' +
  'self.upload_file(filename)\n' +
  'get_request = GetVbaProjectRequest(filename)\n' +
  'get_result = self.tasks_api.get_vba_project(get_request)\n' +
  'self.assertIsNotNone(get_result)\n' +
  'self.assertIsInstance(get_result, VbaProjectResponse)\n' +
  'self.assertIsNotNone(get_result.vba_project.modules)\n' +
  'self.assertEqual(7, len(get_result.vba_project.modules))\n' +
  'self.assertEqual(\'Module1\', get_result.vba_project.modules[0].name)\n' +
  'self.assertTrue(get_result.vba_project.modules[0].source_code.startswith(\'Type MEMORYSTATUS\'))';

const CheckedGist = () => {
  const dispatch = useDispatch();
  const selectedGist = useSelector(state => state.selectedGist);
  console.log(selectedGist);

  return (
    <SyntaxHighlighter language="python" style={docco}>
      { selectedGist.content }
    </SyntaxHighlighter>
  );
};

export default CheckedGist;
