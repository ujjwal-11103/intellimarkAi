import React from 'react';

const IntelliPlanPrivacy: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-700 px-8 py-10 text-white sm:px-12 sm:py-14">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-200">Policy</span>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              INTELLIPLAN MASTER SERVICE AGREEMENT & PRIVACY POLICY
            </h1>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Effective Date</p>
                <p className="mt-2 text-sm font-semibold text-white">April 28, 2026</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Provider</p>
                <p className="mt-2 text-sm font-semibold text-white">Intellimark Analytics ("Company," "We," "Us")</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Product</p>
                <p className="mt-2 text-sm font-semibold text-white">IntelliPlan (the "Application")</p>
              </div>
            </div>

          </div>

          <div className="space-y-10 p-6 sm:p-10">
            <article className="space-y-10">
              <section id="part-1" className="space-y-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="space-y-2">
                  <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                    Part 1
                  </span>
                  <h2 className="text-2xl font-semibold text-slate-900">DETAILED PRIVACY POLICY</h2>
                </div>

                <div id="processing" className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">1. Data Processing Philosophy and Sovereignty</h3>
                  <p className="text-slate-700">
                    IntelliPlan is designed as an "Azure-Native" application. We adhere to the principle of data sovereignty.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">
                      <strong>Customer Tenant Isolation:</strong> All Customer Data uploaded to or processed by IntelliPlan remains within the Customer’s Azure environment.
                    </li>
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">
                      <strong>No Data Extraction:</strong> The Company does not replicate, migrate, or store Customer’s proprietary business data on its own external servers unless explicitly agreed upon for support purposes.
                    </li>
                  </ul>
                </div>

                <div id="categories" className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">2. Categories of Data Collected</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-sm font-semibold text-slate-900">Operational Data (Customer-Owned)</p>
                      <p className="mt-2 text-slate-700">Historical sales data, inventory logs, supply chain metrics, and any other business variables provided by the Customer for processing.</p>
                    </div>
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-sm font-semibold text-slate-900">Application Metadata</p>
                      <p className="mt-2 text-slate-700">Technical data about app performance, crash logs, and feature usage patterns to ensure stability.</p>
                    </div>
                    <div className="rounded-3xl bg-white p-5 shadow-sm sm:col-span-2">
                      <p className="text-sm font-semibold text-slate-900">User Information</p>
                      <p className="mt-2 text-slate-700">Name, email address, and Azure Active Directory (MS Entra ID) identifiers for authentication and access control.</p>
                    </div>
                  </div>
                </div>

                <div id="purpose" className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">3. Purpose of Processing</h3>
                  <p className="text-slate-700">We process data for the following exclusive purposes:</p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">To generate predictive forecasting models and optimization plans.</li>
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">To facilitate "What-If" scenario simulations.</li>
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">To authenticate authorized users within the Customer's organization.</li>
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">To provide technical support and troubleshooting.</li>
                  </ul>
                </div>

                <div id="security" className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">4. Security Standards</h3>
                  <p className="text-slate-700">We utilize Azure’s native security stack to protect data:</p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">Encryption: Data is encrypted at rest via AES-256 and in transit via TLS 1.2 or higher.</li>
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">Access Control: We support Role-Based Access Control (RBAC) to ensure only authorized personnel within your organization can view sensitive outputs.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">5. Compliance and International Transfers</h3>
                  <p className="text-slate-700">
                    IntelliPlan is designed to assist Customers in maintaining compliance with GDPR, CCPA, and HIPAA. Because data remains within the Customer’s selected Azure region, the Customer maintains control over geographical data residency.
                  </p>
                </div>
              </section>

              <section id="part-2" className="space-y-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="space-y-2">
                  <span className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-purple-700">
                    Part 2
                  </span>
                  <h2 className="text-2xl font-semibold text-slate-900">TERMS OF SERVICE & LEGAL PROTECTIONS</h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">6. Limitation of Liability: Forecast Errors and Business Decisions</h3>
                  <p className="text-slate-700"><strong>CRITICAL CLAUSE:</strong> The Customer acknowledges that IntelliPlan utilizes probabilistic machine learning and artificial intelligence algorithms.</p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">No Guarantee of Accuracy: Forecasts and optimization plans are mathematical estimates based on historical data and are not guarantees of future performance.</li>
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">Exclusion of Liability: Under no circumstances shall Intellimark Analytics be held liable for any financial losses, loss of profit, inventory spoilage, or operational disruptions resulting from inaccuracies in forecasts or optimization recommendations.</li>
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">Professional Judgment: The Application is a decision-support tool. The final responsibility for business decisions, procurement, and strategy lies solely with the Customer.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">7. Force Majeure</h3>
                  <p className="text-slate-700">Neither party shall be liable for any failure or delay in performance under this Agreement (except for payment obligations) for causes beyond their reasonable control, including but not limited to:</p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">Acts of God, fire, flood, or earthquake.</li>
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">War, terrorism, or civil unrest.</li>
                    <li className="rounded-2xl border border-slate-200 bg-white p-4"><strong>Cloud Infrastructure Failure:</strong> Widespread outages of Microsoft Azure services, global internet disruptions, or large-scale cyber-attacks (e.g., zero-day exploits) that render the cloud environment inaccessible.</li>
                    <li className="rounded-2xl border border-slate-200 bg-white p-4">Governmental actions or labor strikes.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">8. Disclaimer of Warranties</h3>
                  <p className="text-slate-700">IntelliPlan is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We disclaim all warranties, express or implied, including the implied warranties of merchantability and fitness for a particular purpose. We do not warrant that the Application will be error-free or that its outputs will meet the Customer&apos;s specific financial targets.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">9. Indemnification</h3>
                  <p className="text-slate-700">The Customer agrees to indemnify and hold harmless Intellimark Analytics from any claims, damages, or expenses (including legal fees) arising from the Customer’s use of Application outputs in their business operations or any breach of this Agreement by the Customer.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">10. Termination</h3>
                  <p className="text-slate-700">Upon termination of the Azure Marketplace subscription, the Customer’s access to the Application will cease. Because data is stored in the Customer’s Azure tenant, the Customer is responsible for exporting or deleting their data prior to termination.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">11. Governing Law</h3>
                  <p className="text-slate-700">This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which Intellimark Analytics is registered, without regard to its conflict of law principles.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">12. Contact Information</h3>
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-slate-700">For legal inquiries or privacy-related concerns:</p>
                    <p className="mt-3 font-semibold text-slate-900">Intellimark Analytics Legal Department</p>
                    <a href="mailto:legal@intelliplan.ai" className="mt-1 inline-block text-blue-700 hover:text-blue-900">legal@intelliplan.ai</a>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelliPlanPrivacy;
