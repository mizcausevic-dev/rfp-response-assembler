$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$screenshots = Join-Path $root "screenshots"
New-Item -ItemType Directory -Force -Path $screenshots | Out-Null
Get-ChildItem -Path $screenshots -File -ErrorAction SilentlyContinue | Remove-Item -Force

Add-Type -AssemblyName System.Drawing

function New-ProofImage {
  param(
    [string]$Title,
    [string]$Subtitle,
    [string[]]$Bullets,
    [string]$OutputPath
  )

  $width = 1600
  $height = 900
  $bmp = New-Object System.Drawing.Bitmap($width, $height)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = "AntiAlias"
  $bg = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(7, 10, 15))
  $panelPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(60, 120, 255, 170), 2)
  $textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(233, 243, 255))
  $mutedBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(186, 200, 218))
  $accentBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(55, 255, 139))
  $dotBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(25, 199, 255))
  $fontTitle = New-Object System.Drawing.Font("Georgia", 30, [System.Drawing.FontStyle]::Bold)
  $fontSub = New-Object System.Drawing.Font("Segoe UI", 16)
  $fontBody = New-Object System.Drawing.Font("Segoe UI", 14)

  $g.FillRectangle($bg, 0, 0, $width, $height)
  $rect = New-Object System.Drawing.Rectangle(40, 40, 1520, 820)
  $g.DrawRectangle($panelPen, $rect)
  $g.DrawString("RFP Response Assembler", $fontSub, $accentBrush, 70, 85)
  $g.DrawString($Title, $fontTitle, $textBrush, 70, 135)
  $subtitleRect = New-Object System.Drawing.RectangleF(70, 220, 1400, 80)
  $g.DrawString($Subtitle, $fontSub, $mutedBrush, $subtitleRect)

  $y = 320
  foreach ($bullet in $Bullets) {
    $g.FillEllipse($dotBrush, 85, $y + 8, 10, 10)
    $bulletRect = New-Object System.Drawing.RectangleF(110, $y, 1320, 48)
    $g.DrawString($bullet, $fontBody, $textBrush, $bulletRect)
    $y += 72
  }

  $g.DrawString("Synthetic proof render for README packaging.", $fontSub, $mutedBrush, 70, 800)
  $bmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

New-ProofImage -Title "RFP response overview for the next buyer cycle" -Subtitle "One executive surface for coverage, evidence reuse, differentiation, and submission posture." -Bullets @(
  "The overview keeps reusable response packs, weak differentiation, and submission drag in one board-readable view.",
  "Leadership can see which RFP packets are ready now and which still require manual rewriting.",
  "This layer turns enterprise responses into reusable operating leverage instead of ad hoc bid labor."
) -OutputPath (Join-Path $screenshots "01-overview-proof.png")

New-ProofImage -Title "Response lane keeps owners, blockers, and next moves connected" -Subtitle "Every route retains the owner, buyer, response theme, headline gap, and next move." -Bullets @(
  "The response-lane view makes it obvious which buyer packets are reusable now and which are still slowed by missing ownership.",
  "Blockers stay tied to the actual deal packet instead of drifting into vague enablement language.",
  "Leadership can tighten the response pack before the next procurement or legal review starts."
) -OutputPath (Join-Path $screenshots "02-response-lane-proof.png")

New-ProofImage -Title "Coverage matrix shows where answer reuse still breaks" -Subtitle "Coverage, evidence reuse, and company-tag traces stay visible in one reusable response inventory." -Bullets @(
  "This view keeps IBM, Azure, CyberArk, FinTech, public-sector, and healthcare traces tied to actual live surfaces.",
  "Coverage gaps stay visible before a team promises more than the packet can support.",
  "Leadership can see where the next response-pack investment will save the most drafting time."
) -OutputPath (Join-Path $screenshots "03-coverage-matrix-proof.png")

New-ProofImage -Title "Submission posture keeps readiness tied to differentiation" -Subtitle "Response pressure remains grounded in reuse, differentiation, and source-proof linkage." -Bullets @(
  "The executive story stays tied to actual evidence ownership and source surfaces rather than abstract pitch language.",
  "Slow draft paths remain visible before they turn into procurement bottlenecks.",
  "This creates a repeatable cadence for reusable response packs and faster board-safe submissions."
) -OutputPath (Join-Path $screenshots "04-submission-posture-proof.png")
