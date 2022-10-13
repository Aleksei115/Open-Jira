// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  
    if( req.nextUrl.pathname.startsWith('/api/entries/')){

        const id = req.nextUrl.pathname.replace('/api/entries/','')
        const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

        if( !checkMongoIDRegExp.test(id) ){
            const url = req.nextUrl.clone()
            url.pathname = '/api/bad-request'

            url.search = `?message=${id} is not a valid ID!`   //Mandamos un mensaje por la url para enviarlo en el response del endpoint api/bad-request

            return NextResponse.rewrite(url)
        }

    }
    
    const url = req.nextUrl.clone()   

    if (url.pathname === '/api/seed') {
        url.pathname = '/'
        return NextResponse.redirect(url)   
    } 

    

    return NextResponse.next();
}


// See "Matching Paths" below to learn more solo a este path se afecta el middleware
export const config = {
//   matcher: '/about/:path*',
    matcher: ['/api/entries/:path*','/api/seed']
}