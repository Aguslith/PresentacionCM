Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\herre\Desktop\PresentacionCM\Instagram feed AlpaCladd.jpeg"
$outDir = "c:\Users\herre\Desktop\PresentacionCM\public\instagram"

$img = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $img.Width
$h = $img.Height

$gridLeft = 96
$gridTop = 305
$gridRight = 1158
$gridBottom = 1254

$gridW = $gridRight - $gridLeft
$gridH = $gridBottom - $gridTop

$gapX = 14
$gapY = 14

$cellW = ($gridW - (3 * $gapX)) / 4.0
$cellH = ($gridH - (3 * $gapY)) / 4.0

$index = 1
for ($row = 0; $row -lt 4; $row++) {
    for ($col = 0; $col -lt 4; $col++) {
        $x = [int][Math]::Round($gridLeft + $col * ($cellW + $gapX))
        $y = [int][Math]::Round($gridTop + $row * ($cellH + $gapY))
        $cw = [int][Math]::Round($cellW)
        $ch = [int][Math]::Round($cellH)

        $rect = New-Object System.Drawing.Rectangle($x, $y, $cw, $ch)
        $bmp = New-Object System.Drawing.Bitmap($cw, $ch)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

        $destRect = New-Object System.Drawing.Rectangle(0, 0, $cw, $ch)
        $g.DrawImage($img, $destRect, $rect, [System.Drawing.GraphicsUnit]::Pixel)

        $targetFile = Join-Path $outDir ("post_" + $index + ".jpg")
        $bmp.Save($targetFile, [System.Drawing.Imaging.ImageFormat]::Jpeg)

        $g.Dispose()
        $bmp.Dispose()
        $index++
    }
}

$img.Dispose()
Write-Host "All 16 posts sliced perfectly!"
