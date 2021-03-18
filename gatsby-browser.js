import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import CMS from 'netlify-cms-app'
import { fr } from 'netlify-cms-locales'

setTimeout(function () { AOS.init() }, 1000)

CMS.registerLocale('fr', fr)
