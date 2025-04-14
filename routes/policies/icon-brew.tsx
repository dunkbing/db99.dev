export default function () {
  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        IconBrew Privacy Policy
      </h1>
      <p className="italic text-gray-500 mb-6">Last Updated: April 2025</p>

      <h2 className="text-2xl font-semibold text-green-600 mb-3">
        Personal Information
      </h2>
      <p className="mb-4">
        IconBrew does not collect, store, or share any personal user data. All
        operations are performed locally on your Mac.
      </p>

      <h2 className="text-2xl font-semibold text-green-600 mb-3">
        Local Storage
      </h2>
      <p className="mb-4">The app uses local storage to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Save your generated icon files to your chosen output folder</li>
        <li>Remember your last used settings</li>
      </ul>

      <h2 className="text-2xl font-semibold text-green-600 mb-3">
        File System Access
      </h2>
      <p className="mb-4">
        IconBrew requires permission to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Read source images you select or drag into the app</li>
        <li>Write generated icon files to directories you choose</li>
      </ul>
      <p className="mb-4">
        No files are accessed without your explicit permission through standard
        macOS file dialogs.
      </p>

      <h2 className="text-2xl font-semibold text-green-600 mb-3">
        Third-Party Services
      </h2>
      <p className="mb-4">
        IconBrew does not use any third-party analytics, advertising, or
        tracking services. It operates completely offline and does not connect
        to the internet.
      </p>

      <h2 className="text-2xl font-semibold text-green-600 mb-3">
        Children's Privacy
      </h2>
      <p className="mb-4">
        IconBrew is safe for users of all ages and does not collect any personal
        information from children or adults.
      </p>

      <h2 className="text-2xl font-semibold text-green-600 mb-3">
        Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this privacy policy from time to time. Please review it
        periodically.
      </p>

      <h2 className="text-2xl font-semibold text-green-600 mb-3">Contact Us</h2>
      <p>
        If you have any questions about this privacy policy, please contact us
        at support@iconbrew.app
      </p>
    </div>
  );
}
