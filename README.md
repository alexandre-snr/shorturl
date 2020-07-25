# ShortURL

ShortURL is a simple URL shortening app made using technologies such as NodeJS, Express, React, LowDb, Material-UI

![Screenshot](https://raw.githubusercontent.com/alexandre-snr/shorturl/medias/example.png)
Here is a live demo: [https://shorturl.alexandresauner.fr](https://shorturl.alexandresauner.fr)
## Installation

This project can be deployed with docker as a single container. You must change the public URL of the server in the client's config file: ```/client/src/config.js```.

Then build the image using the following command: 
```docker build -t <tag>:<version>```.

The image is built and ready to use. The web server listens on port 8080 by default but it can be changed using the environment variable ```PORT```.

## Contributions

This is a small training project, but feel free to improve it, pull requests are welcome.

## License

This project is under the [MIT](https://choosealicense.com/licenses/mit/) license.
