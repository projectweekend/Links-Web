The web app for what will become http://links.projectweekend.net

## Development Environment

The development environment for this project is fully bootstrapped and portable with the help of: [Vagrant](http://www.vagrantup.com/), [Docker](https://www.docker.com/), and [Fig](http://orchardup.github.io/fig/index.html). If using Linux, all of the `Vagrant` stuff can be ignored since Docker runs natively.

* `vagrant up` - Start the VM. On first launch a lot of things need to be downloaded and installed so it could take a little while. Subsequent launches are much faster.
* `vagrant ssh` - Connect to the VM
* `vagrant halt` - Shut down the VM
* `vagrant destroy` - Delete the VM.
* `/vagrant` - The path on the VM where the project code is mounted. All `fig` commands mus be executed from this path.
* `fig up` - Start the web application container. On first launch the base container will be downloaded from the Docker Registry so it could take a while. Subsequent launches are much faster.

## Structure

* `app.js` - the Node app serving the Angular app and template partials.
* `views/partials/` - all the Jade templates used for partial views in the Angular app.
* `public/app/` - all the JavaScript files that make up the Angular app. Grunt tasks are used to concatenate all of the files from `public/app/` into a single file `public/build/project.js`.
