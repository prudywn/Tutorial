const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Welcome to my website</h1>')
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>About Me</h1>')
        }
        else{
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.end(`<h1>Page Not Found</h1>
                <a href="/">Back to Home</a>`)
            }
        })

        server.listen(5000)
   // res.write('Welcome to our home page!')
    //res.writeHead(200, {'Content-Type': 'text/plain'})
   // res.end('\nHello World')

