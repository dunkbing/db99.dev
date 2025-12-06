import { define } from "../../utils.ts";

export default define.page(function KanajiPolicy() {
  return (
    <div class="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 class="text-3xl font-bold text-blue-600 mb-4">
        Kanaji App Privacy Policy
      </h1>
      <p class="italic text-gray-500 mb-6">Last Updated: July 2025</p>

      <h2 class="text-2xl font-semibold text-green-600 mb-3">
        Personal Information
      </h2>
      <p class="mb-4">
        This app does not collect, store, or share any personal user data. All
        features and progress tracking are handled locally on your device.
      </p>

      <h2 class="text-2xl font-semibold text-green-600 mb-3">
        Data Storage
      </h2>
      <p class="mb-4">
        The app may use your device local storage to remember your learning
        progress and settings. None of this information is transmitted or
        shared.
      </p>

      <h2 class="text-2xl font-semibold text-green-600 mb-3">
        Third-Party Services
      </h2>
      <p class="mb-4">
        This app does not use any third-party analytics, or tracking services.
      </p>

      <h2 class="text-2xl font-semibold text-green-600 mb-3">
        Contact
      </h2>
      <p class="mb-4">
        If you have any questions about this policy, please contact the
        developer.
      </p>
    </div>
  );
});
