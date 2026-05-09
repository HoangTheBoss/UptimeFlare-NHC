// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "NguyenHoang.Cloud Services Uptime",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/HoangTheBoss', label: 'GitHub' },
    { link: 'mailto:me@nguyenhoang.cloud', label: 'Email', highlight: true },
  ],
  group: {
    '🌐 nguyenhoang.cloud': ['mirrors', 'auth', 'nexusoss'],
    '📷 photoworks.pw': ['pw_drive'],
  },
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'mirrors',
      // `name` is used at status page and callback message
      name: 'OSS Repository Mirror',
      // `method` should be a valid HTTP Method
      method: 'HEAD',
      // `target` is a valid URL
      target: 'https://mirrors.nguyenhoang.cloud',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'mirrors.nguyenhoang.cloud',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      // statusPageLink: 'https://example.com',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'auth',
      // `name` is used at status page and callback message
      name: 'Authentik',
      // `method` should be a valid HTTP Method
      method: 'HEAD',
      // `target` is a valid URL
      target: 'https://auth.nguyenhoang.cloud/-/health/ready/',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'auth.nguyenhoang.cloud',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      // statusPageLink: 'https://example.com',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'nexusoss',
      // `name` is used at status page and callback message
      name: 'Nexus Repository',
      // `method` should be a valid HTTP Method
      method: 'HEAD',
      // `target` is a valid URL
      target: 'https://nexus.nguyenhoang.cloud/',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'nexus.nguyenhoang.cloud',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      // statusPageLink: 'https://example.com',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'pw_drive',
      // `name` is used at status page and callback message
      name: 'Photoworks Drive',
      // `method` should be a valid HTTP Method
      method: 'HEAD',
      // `target` is a valid URL
      target: 'https://drive.photoworks.pw/',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'drive.photoworks.pw',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      // statusPageLink: 'https://example.com',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // // Example TCP Monitor
    // {
    //   id: 'test_tcp_monitor',
    //   name: 'Example TCP Monitor',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'TCP_PING',
    //   // `target` should be `host:port` for tcp monitors
    //   target: '1.2.3.4:22',
    //   tooltip: 'My production server SSH',
    //   statusPageLink: 'https://example.com',
    //   timeout: 5000,
    // },
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 8204327900,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Ho_Chi_Minh',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = [
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    monitors: ['pw_drive'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    // title: '',
    // Description of the maintenance, will be shown at status page
    body: 'Network Infrastructure Upgrade',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2026-04-23T03:00:00+07:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    // end: '2050-01-01T00:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    // color: 'blue',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
