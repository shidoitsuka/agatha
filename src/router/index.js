import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import GlobalSearch from '@/views/GlobalSearch.vue'
import ProfilerSearch from '@/views/ProfilerSearch.vue'
import SearchHistory from '@/views/search-results/history/Index.vue'
import SearchResult from '@/views/search-results/Result.vue'
import SearchProfiler from '@/views/search-results/Index.vue'
import Alerts from '@/views/alerts/Index.vue'
import CaseManagement from '@/views/case-management/Index.vue'
import CaseDashboard from '@/views/case-dashboard/Index.vue'
import Bookmark from '@/views/bookmark/Index.vue'
import MapShape from '@/views/map/Shapes.vue'
import MapAction from '@/views/map/Action.vue'
import LinkAnalysis from '@/views/link/Analysis.vue'
import LinkCombine from '@/views/link/Combine.vue'
import ReportGenerate from '@/views/report/Generate.vue'
import ReportDownloadLink from '@/views/report/Download.vue'
import AnalystWall from '@/views/analyst/Wall.vue'
import CyberMissionActionLog from '@/views/cyber-mission/ActionLog.vue'
import Topics from '@/views/topics/Index.vue'
import InfiltrationList from '@/views/infiltration/List.vue'
import InfiltrationView from '@/views/infiltration/View.vue'

export const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/global-search', name: 'Global Search', component: GlobalSearch, meta: { layout: 'DashboardLayout' } },
  { path: '/profiler-search', name: 'Profiler Search', component: ProfilerSearch, meta: { layout: 'DashboardLayout' } },
  { path: '/search-history', name: 'Search History', component: SearchHistory, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/search-result', name: 'Search Result', component: SearchResult, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/search-profiler', name: 'Search Document, Entity, Avatars, Media, Groups', component: SearchProfiler, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/alerts', name: 'Alert', component: Alerts, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/case-management', name: 'Case Management', component: CaseManagement, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/case-dashboard', name: 'Case Dashboard', component: CaseDashboard, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/bookmarks', name: 'Bookmark', component: Bookmark, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/map/shapes', name: 'Map Shapes', component: MapShape, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/map/action', name: 'Map Action', component: MapAction, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/link/analysis', name: 'Link Analysis', component: LinkAnalysis, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/link/combine', name: 'Link Combine', component: LinkCombine, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/report/generate', name: 'Report Generate', component: ReportGenerate, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/report/download', name: 'Report Download Link', component: ReportDownloadLink, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/analyst/wall', name: 'Analyst Wall', component: AnalystWall, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/cyber-mission/action', name: 'Cuber Mission Action Log', component: CyberMissionActionLog, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/topics', name: 'Topics', component: Topics, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/infiltration/list', name: 'Infiltration List', component: InfiltrationList, meta: { layout: 'DashboardWithoutSidebarLayout' } },
  { path: '/infiltration/view', name: 'Infiltration View', component: InfiltrationView, meta: { layout: 'DashboardWithoutSidebarLayout' } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
