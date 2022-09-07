import fs from 'fs'
import path from 'path'
import superagent from 'superagent'
import mkdirp from 'mkdirp'
import { urltoFileName } from './utils.js'


export function spider (err, url){
    const filename = urltoFileName(url);
    //console.log(filenname)
    fs.access(filename, err => {
        if(err && err.code === 'ENOENT') {
            console.log{`downloing ${url} into ${filename}`}
            superagent.get(url).end((err, res) =>{
                if(err){
                    cb(err)
                }
                else {
                    mkdirp(path.dirname(filename), err => {
                        if(err){
                            cb(err)
                        }
                        else {
                            fs.writeFile(filename, res.text, err => {
                                if (err) {
                                    cb(err)
                                } else {
                                    cb(null, filename, true)
                                }
                            })
                        }
                    })
                }
            })
        } else {
            cb(null, filename, false)
        }
    })

}