/** @type AppBreadcrumb */
import { register } from 'src/app/Util/ui'

import AppAvatar from './Avatar/AppAvatar'
import AppBreadcrumb from './Breadcrumb/AppBreadcrumb'
import AppContent from 'src/app/Components/Content/AppContent'
import AppIcon from './Icon/AppIcon'
import AppForm from './Form/AppForm'
import AppMenu from './Menu/AppMenu.vue'
import AppPagination from './Pagination/AppPagination'
import AppSeparator from 'src/app/Components/Separator/AppSeparator'
import AppTable from './Table/AppTable'

register('AppAvatar', AppAvatar)
register('AppBreadcrumb', AppBreadcrumb)
register('AppContent', AppContent)
register('AppForm', AppForm)
register('AppIcon', AppIcon)
register('AppMenu', AppMenu)
register('AppPagination', AppPagination)
register('AppSeparator', AppSeparator)
register('AppTable', AppTable)

export default true
