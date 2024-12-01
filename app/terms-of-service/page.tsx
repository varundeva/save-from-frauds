import React from "react"

const page = () => {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-center text-3xl font-semibold">
        Terms of Service
      </h1>
      <p className="text-center text-sm text-gray-500">
        Effective Date: 01/Dec/2024
      </p>

      <section className="mt-6">
        <h2 className="mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using the services provided by Save from Frauds (“the
          Service”), you agree to be bound by these Terms of Service (“Terms”).
          If you do not agree to these Terms, please do not use our Service.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="mb-4 text-2xl font-semibold">2. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms at any time. Any changes
          will be posted on this page, and the effective date will be updated.
          You are encouraged to review these Terms periodically to stay informed
          of any changes. Your continued use of the Service after changes are
          posted constitutes your acceptance of those changes.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="mb-4 text-2xl font-semibold">3. Use of the Service</h2>
        <p className="mb-4">
          You may use the Service only for lawful purposes and in accordance
          with these Terms. You agree not to:
        </p>
        <ul className="mb-4 list-inside list-disc">
          <li>Use the Service for any illegal or unauthorized purposes.</li>
          <li>
            Impersonate any person or entity or falsely state or misrepresent
            your affiliation with any person or entity.
          </li>
          <li>
            Engage in any activity that disrupts, damages, or interferes with
            the Service or its infrastructure.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="mb-4 text-2xl font-semibold">4. User Accounts</h2>
        <p className="mb-4">
          To use certain features of the Service, you may be required to create
          an account. You are responsible for maintaining the confidentiality of
          your account credentials, including your username and password. You
          agree to notify us immediately of any unauthorized use of your account
          or any other security breach.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="mb-4 text-2xl font-semibold">
          5. User-Generated Content
        </h2>
        <p className="mb-4">
          By submitting content, such as reports of fraud, to the Service, you
          grant Save From Frauds a worldwide, royalty-free, and non-exclusive
          license to use, display, and distribute the content as part of the
          Service.
        </p>
        <p className="mb-4">
          You are solely responsible for the content you submit. You agree not
          to submit content that is defamatory, fraudulent, harmful, or violates
          any laws or third-party rights.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="mb-4 text-2xl font-semibold">
          6. Privacy and Data Protection
        </h2>
        <p className="mb-4">
          Our Privacy Policy explains how we collect, use, and protect your
          personal information. By using the Service, you consent to the
          collection and use of your data as described in the Privacy Policy.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="mb-4 text-2xl font-semibold">
          7. Disclaimers and Limitation of Liability
        </h2>
        <p className="mb-4">
          The Service is provided &quot;as is&quot; and &quot;as available&quot;
          without any warranties or representations, express or implied,
          including but not limited to the accuracy, completeness, or
          reliability of the content.
        </p>
        <p className="mb-4">
          Save From Frauds is not liable for any direct, indirect, incidental,
          special, or consequential damages arising out of or in connection with
          your use of the Service, including but not limited to data loss,
          financial loss, or business interruption.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="mb-4 text-2xl font-semibold">8. Termination</h2>
        <p className="mb-4">
          We may suspend or terminate your access to the Service at any time,
          without notice, for any reason, including if you violate these Terms.
        </p>
        <p className="mb-4">
          Upon termination, your right to use the Service will immediately
          cease, and you must stop using the Service and delete any content
          associated with it.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="mb-4 text-2xl font-semibold">9. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about these Terms or need to{" "}
          <a href="/contact">contact us</a>
        </p>
      </section>
    </div>
  )
}

export default page
