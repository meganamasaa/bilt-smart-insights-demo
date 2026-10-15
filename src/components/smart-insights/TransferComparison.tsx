import type { TransferComparisonResult } from "@/lib/types";

interface TransferComparisonProps {
  transferComparison: TransferComparisonResult;
}

export default function TransferComparison({
  transferComparison,
}: TransferComparisonProps) {
  const {
    hasTransferPartner,
    partnerName,
    awardPointsCost,
    portalPointsCost,
    pointsSaved,
    centsPerPoint,
  } = transferComparison;

  if (!hasTransferPartner) {
    return (
      <div>
        <h4 className="text-sm font-bold text-bilt-black mb-3">Transfer comparison</h4>
        <div className="bg-bilt-green-light rounded-lg px-4 py-3">
          <p className="text-sm font-semibold text-bilt-green">
            &#10003; Portal is your best option
          </p>
          <p className="text-xs text-bilt-gray mt-0.5">
            No transfer partner available for this property
          </p>
        </div>
      </div>
    );
  }

  const roundedCpp = Math.round(centsPerPoint * 10) / 10;

  return (
    <div>
      <h4 className="text-sm font-bold text-bilt-black mb-3">
        Transfer to {partnerName}
      </h4>

      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-bilt-gray">Award (Cat 8 &times; 2 nights)</span>
          <span className="text-sm font-semibold text-bilt-black">
            {awardPointsCost.toLocaleString()} pts
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-bilt-gray">Portal would cost</span>
          <span className="text-sm text-bilt-gray">
            {portalPointsCost.toLocaleString()} pts
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-bilt-gray">Value per point (transfer)</span>
          <span className="text-sm font-bold text-bilt-black">
            {roundedCpp}&cent;/pt
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-bilt-gray">Value per point (portal)</span>
          <span className="text-sm text-bilt-gray">1.25&cent;/pt</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-bilt-gray">Points saved vs. portal</span>
          <span className="text-sm font-bold text-bilt-black">
            {pointsSaved.toLocaleString()} pts
          </span>
        </div>
      </div>

      {/* Recommendation callout */}
      <div className="bg-bilt-green-light rounded-lg px-4 py-3 mt-4">
        <p className="text-xs text-bilt-green">
          <span className="font-bold">&#127919; Transfer is the better deal.</span>{" "}
          You&apos;d get {roundedCpp}&cent;/pt vs. 1.25&cent;/pt on the portal — saving{" "}
          <strong>{pointsSaved.toLocaleString()} points</strong>. Plus you earn Hyatt points &amp;
          status credits on the stay.
        </p>
      </div>
    </div>
  );
}
