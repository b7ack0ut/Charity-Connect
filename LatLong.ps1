$csv=Import-Csv LatLngCandidates_new.txt -Delimiter "`t"
$webClient=New-Object System.Net.WebClient
filter Get-LatLong
{
    if($_.name)
    {
        $url="https://maps.googleapis.com/maps/api/geocode/xml?address={0},{1},{2}&sensor=false" -f $_.name
        #$url
        $xml=[xml]$webClient.DownloadString($url)
        if($xml -and $xml.GeocodeResponse -and $xml.GeocodeResponse.status -and $xml.GeocodeResponse.status -eq "OK"){
            $loc=$xml.GeocodeResponse.result.geometry.location
            "{2},{0},{1}" -f $loc.lat,$loc.lng,$_.name
        }
    }
}