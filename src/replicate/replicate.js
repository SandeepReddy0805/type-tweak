import Replicate from "replicate";
import fetch from 'unfetch';

async function sendRequest(){
    const replicate = new Replicate({
        auth: process.env.API_KEY,
        fetch: fetch.bind()
    });

    const output = await replicate.run(
    "arielreplicate/instruct-pix2pix:10e63b0e6361eb23a0374f4d9ee145824d9d09f7a31dcd70803193ebc7121430",
        {
            input: {
                input_image: "https://www.adobe.com/express/feature/image/media_16ad2258cac6171d66942b13b8cd4839f0b6be6f3.png",
                instruction_text: "turn the dog into a cyborg",
                seed: 0,
            }
        }
    );
    return output;
}
export default sendRequest; 