import CMS from 'netlify-cms-app'
import { fr } from 'netlify-cms-locales'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({ startEvent: 'DOMContentLoaded' })

CMS.registerLocale('fr', fr)
