document.getElementById('downloadButton').addEventListener('click', function() {
    // Get the metadata content
    var metadataContent = document.getElementById('metadata').innerText;
    
    // Create a Blob containing the metadata content
    var blob = new Blob([metadataContent], { type: 'text/plain' });
    
    // Create a temporary URL for the Blob
    var url = URL.createObjectURL(blob);

    // Create a temporary anchor element
    var a = document.createElement('a');
    a.href = url;
    a.download = 'metadata.txt'; // Set the filename for the downloaded file
    
    // Append the anchor to the document body and trigger a click event
    document.body.appendChild(a);
    a.click();
    
    // Remove the anchor from the document body
    document.body.removeChild(a);
});


document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const metadata = extractMetadata(e.target.result);
        displayMetadata(metadata);
    };
    reader.readAsText(file);
});

function extractMetadata(xmlString ) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    
    const sceneId = xmlDoc.querySelector('LANDSAT_SCENE_ID').textContent;
    const acquisitionDate = xmlDoc.querySelector('DATE_ACQUIRED').textContent;
    const cloudCover = xmlDoc.querySelector('CLOUD_COVER').textContent;
    const ProjectionAttribute = xmlDoc.querySelector('PROJECTION_ATTRIBUTES').textContent;
    const MapProjection = xmlDoc.querySelector('MAP_PROJECTION').textContent;
    const Sunazimuth= xmlDoc.querySelector('SUN_AZIMUTH').textContent;
    const sensor = xmlDoc.querySelector('SENSOR_ID').textContent;
    const RollAngle = xmlDoc.querySelector('ROLL_ANGLE').textContent;
    const SunElevation = xmlDoc.querySelector('SUN_ELEVATION').textContent;
    const Path = xmlDoc.querySelector('WRS_PATH').textContent;
    const Row = xmlDoc.querySelector('WRS_ROW').textContent;
    const UtmZone= xmlDoc.querySelector('UTM_ZONE ').textContent;
    const Outputformate = xmlDoc.querySelector('OUTPUT_FORMAT ').textContent;
    const Collectioncategory = xmlDoc.querySelector(' COLLECTION_CATEGORY').textContent;
    const Datum = xmlDoc.querySelector('DATUM').textContent;
    const LandsatProductID = xmlDoc.querySelector('LANDSAT_PRODUCT_ID').textContent;
    const Collectionnumber = xmlDoc.querySelector('COLLECTION_NUMBER').textContent;
    const NadirorOffNadir = xmlDoc.querySelector('NADIR_OFFNADIR').textContent;
    const StationID = xmlDoc.querySelector('STATION_ID').textContent;
    const GruondControlPointsModel = xmlDoc.querySelector('GROUND_CONTROL_POINTS_MODEL').textContent;
    const  GeometricRSMEModel= xmlDoc.querySelector('GEOMETRIC_RMSE_MODEL').textContent;
    const  ImageQualityOLI = xmlDoc.querySelector('IMAGE_QUALITY_OLI').textContent;
    const  ImageQualityTIRS= xmlDoc.querySelector('IMAGE_QUALITY_TIRS').textContent;
    const  ProcessingSoftwareVersion = xmlDoc.querySelector('PROCESSING_SOFTWARE_VERSION').textContent;
    const  GridCellSizePanchromatic= xmlDoc.querySelector('GRID_CELL_SIZE_PANCHROMATIC').textContent;
    const  Orientation = xmlDoc.querySelector(' ORIENTATION').textContent;
    const  GeometricRMSEMOdelX= xmlDoc.querySelector('GEOMETRIC_RMSE_MODEL_X').textContent;
    const  GeometricRMSEMOdely= xmlDoc.querySelector('GEOMETRIC_RMSE_MODEL_Y').textContent;
    const  GridCellSizeReflective= xmlDoc.querySelector('GRID_CELL_SIZE_REFLECTIVE').textContent;
    const  GridCellSizeThermal = xmlDoc.querySelector('GRID_CELL_SIZE_THERMAL').textContent;
    const  ReflecticeLines= xmlDoc.querySelector('REFLECTIVE_LINES').textContent;
    const  ReflectiveSamples= xmlDoc.querySelector('REFLECTIVE_SAMPLES').textContent;
    const  ThermalLines= xmlDoc.querySelector('THERMAL_LINES').textContent;
    const  ThermalSamples= xmlDoc.querySelector('THERMAL_SAMPLES').textContent;
    const  Ellipsoid = xmlDoc.querySelector('ELLIPSOID').textContent;
    const  FileNameBFPOLI= xmlDoc.querySelector('FILE_NAME_BPF_OLI').textContent;
    const  FileNameBPFTIRS= xmlDoc.querySelector('FILE_NAME_BPF_TIRS').textContent;
    const  FileNameRLUT= xmlDoc.querySelector('FILE_NAME_RLUT').textContent;
    const  SpacecraftID = xmlDoc.querySelector('SPACECRAFT_ID').textContent;
    const  GruondControlPointsVersion = xmlDoc.querySelector('GROUND_CONTROL_POINTS_VERSION').textContent;
 

    
    return {
        sceneId: sceneId,
        acquisitionDate: acquisitionDate,
        cloudCover: cloudCover,
        ProjectionAttribute: ProjectionAttribute,
        MapProjection: MapProjection,
        sensor: sensor,
        Sunazimuth:Sunazimuth,
        RollAngle:RollAngle,
        SunElevation:SunElevation,
        Path:Path,
        Row:Row,
        UtmZone:UtmZone,
        Outputformate:Outputformate,
        Collectioncategory:Collectioncategory,
        Datum:Datum,
        LandsatProductID:LandsatProductID,
        Collectionnumber:Collectionnumber,
        NadirorOffNadir:NadirorOffNadir,
        StationID:StationID,
        GruondControlPointsModel:GruondControlPointsModel,
        GeometricRSMEModel:GeometricRSMEModel,
        ImageQualityOLI:ImageQualityOLI,
        ImageQualityTIRS:ImageQualityTIRS,
        ProcessingSoftwareVersion:ProcessingSoftwareVersion,
        GridCellSizePanchromatic:GridCellSizePanchromatic,
        GeometricRMSEMOdelX:GeometricRMSEMOdelX,
        GeometricRMSEMOdely:GeometricRMSEMOdely,
        GridCellSizeReflective:GridCellSizeReflective,
        GridCellSizeThermal:GridCellSizeThermal,
        ReflecticeLines:ReflecticeLines,
        ReflectiveSamples: ReflectiveSamples,
        ThermalLines: ThermalLines,
        ThermalSamples: ThermalSamples,
        Ellipsoid: Ellipsoid,
        FileNameBFPOLI: FileNameBFPOLI,
        FileNameBPFTIRS: FileNameBPFTIRS,
        FileNameRLUT: FileNameRLUT,
        SpacecraftID: SpacecraftID,
        GruondControlPointsVersion:GruondControlPointsVersion,
        Orientation:Orientation

    }; 
}

function displayMetadata(metadata) {
    const metadataDiv = document.getElementById('metadata');
    metadataDiv.innerHTML = `
        <table border="1">

             
            <tr>
                <th>Property</th>
                <th>Value</th>
                
               <tr>
                <td>Landsat Product ID ID</td>
                <td>${metadata. LandsatProductID}</td>
            </tr>

            <tr>
            <td> Collection Number</td>
             <td>${metadata. Collectionnumber}</td>
            </tr>
              
            
            <tr>
            <td>  Nadir or OffNadir</td>
             <td>${metadata. NadirorOffNadir}</td>
            </tr>
     
            <tr>
            <td>Station ID</td>
             <td>${metadata. StationID}</td>
            </tr>    

            <tr>
            <td>GroundControl Points Model</td>
             <td>${metadata.  GruondControlPointsModel}</td>
          </tr>

          <tr>
             <td> Ground Control Points Version</td>
              <td>${metadata. GruondControlPointsVersion}</td>
          </tr>
 
          <tr>
              <td>Geometric RSME Model </td>
              <td>${metadata. GeometricRSMEModel}</td>
          </tr>
        
          <tr>
                <td> Image Quality OLI</td>
                <td>${metadata. ImageQualityOLI}</td>
          </tr>


          <tr>
              <td> Image Quality TIRS</td>
             <td>${metadata. ImageQualityTIRS}</td>
         </tr>

          
         <tr>
              <td> Processing Software Version</td>
              <td>${metadata.ProcessingSoftwareVersion }</td>
         </tr>

             
         <tr>
              <td>  Grid CellSize Panchromatic</td>
               <td>${metadata.  GridCellSizePanchromatic}</td>
         </tr>
                
         <tr>
             <td>Geometric RMSE MOdel </td>
             <td>${metadata.GeometricRSMEModel}</td>
          </tr>



           
         <tr>
               <td>Geometric RMSE MOdel X </td>
               <td>${metadata. GeometricRMSEMOdelX}</td>
          </tr>


          <tr>
               <td>Geometric RMSE MOdel Y </td>
               <td>${metadata.GeometricRMSEMOdely}</td>
         </tr>
           
         
         <tr>
             <td>GridCellSize Reflective </td>
             <td>${metadata. GridCellSizeReflective}</td>
         </tr>
               

         <tr>
                <td> GridCell Size Thermal</td>
                <td>${metadata. GridCellSizeThermal}</td>
         </tr>


         <tr>
                <td> Reflectice Lines</td>
                <td>${metadata. ReflecticeLines}</td>
         </tr>
        
            
         <tr>
         <td> Reflective Samples</td>
          <td>${metadata. ReflectiveSamples}</td>
         </tr>

         <tr>
         <td>Thermal Lines </td>
          <td>${metadata. ThermalLines}</td>
         </tr>

         
         <tr>
         <td>Thermal Samples </td>
          <td>${metadata. ThermalSamples}</td>
         </tr>

         
         <tr>
         <td> Ellipsoid</td>
          <td>${metadata.Ellipsoid }</td>
         </tr>

         
         <tr>
         <td>FileName BFP OLI </td>
          <td>${metadata. FileNameBFPOLI}</td>
         </tr>

         
         <tr>
         <td> FileNameBPF TIRS</td>
          <td>${metadata.  FileNameBPFTIRS}</td>
         </tr>

         
         <tr>
         <td> FileNameRLUT</td>
          <td>${metadata.FileNameRLUT }</td>
         </tr>

           
         <tr>
         <td> Spacecraft ID</td>
          <td>${metadata. SpacecraftID}</td>
         </tr>













            
            <tr>
                 <td>Sun Azimuth</td>
             <td>${metadata.Sunazimuth}</td>
           </tr>

            <tr>
                <td>Map Projection</td>
                <td>${metadata.MapProjection}</td>
            </tr>
            <tr>
                <td>Acquisition Date</td>
                <td>${metadata.acquisitionDate}</td>
            </tr>
            <tr>
                <td>Projection Attribute</td>
                <td>${metadata.ProjectionAttribute}</td>
            </tr>
            <tr>
                <td>Cloud Cover</td>
                <td>${metadata.cloudCover}</td>
            </tr>
            <tr>
                <td>Sensor ID</td>
                <td>${metadata.sensor}</td>
            </tr>
        
            <tr>
               <td>Roll Angle</td>
              <td>${metadata.RollAngle}</td>
            </tr>
            <tr>
            <td>Sun Elevation</td>
            <td>${metadata.SunElevation}</td>
          </tr>
          <tr>
            <td>Path</td>
            <td>${metadata.Path}</td>
         </tr>
         <tr>
            <td>Row</td>
            <td>${metadata.Row}</td>
         </tr>
          <tr>
              <td>UTMZONE </td>
              <td>${metadata.UtmZone}</td>
          </tr>
         <tr>
              <td>Output Formate</td>
                <td>${metadata.Outputformate}</td>
            </tr>
          <tr>
         <td>Collection Category</td>
          <td>${metadata.Collectioncategory}</td>
           </tr>
             
           <tr>
         <td>Datum</td>
          <td>${metadata.Datum}</td>
           </tr> 

           <tr>
           <td>Orientation</td>
            <td>${metadata.Orientation}</td>
             </tr> 



           
            
            
        </table>

       `;

       
}
