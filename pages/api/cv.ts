import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);
const url = 'https://drive.google.com/file/d/1OZjVlWGc3Tn0B3djMBWSjUyCFmDIpo3b/view?usp=drive_link';

const handler = async (req, res) => {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=Luke_Trimby_CV.pdf');
  await pipeline(response.body, res);
};

export default handler
