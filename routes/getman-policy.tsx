export default function GetmanPolicy() {
  return (
    <div class="max-w-2xl mx-auto px-4 py-8 prose">
      <h1 class="text-2xl font-bold mb-6">Privacy Policy Summary</h1>

      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 class="text-lg font-semibold mb-2">Data Collection Overview</h2>
        <ul class="list-none pl-0">
          <li>
            • Data Used to Track You: <span class="font-medium">None</span>
          </li>
          <li>
            • Data Linked to You: <span class="font-medium">None</span>
          </li>
          <li>
            • Data Not Linked to You:{" "}
            <span class="font-medium">Network Access only</span>
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h2 class="text-lg font-semibold mb-2">Network Access Details</h2>
        <ul class="bg-gray-50 p-4 rounded-lg list-none">
          <li>• Required for core functionality</li>
          <li>• Not used for tracking</li>
          <li>• Not linked to user identity</li>
          <li>• Not shared with third parties</li>
          <li>• Not used for marketing or advertising</li>
        </ul>
      </div>

      <div>
        <h2 class="text-lg font-semibold mb-2">Privacy Policy Points</h2>
        <ul class="space-y-2 list-disc pl-5">
          <li>
            The app only makes network requests explicitly initiated by the user
          </li>
          <li>No analytics or tracking code is included</li>
          <li>No personal data is collected or stored</li>
          <li>All request data is stored locally on the device</li>
          <li>
            Network access is used solely for HTTP requests to user-specified
            endpoints
          </li>
        </ul>
      </div>
    </div>
  );
}
