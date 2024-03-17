import folium
from folium.plugins import MarkerCluster
import pandas as pd
import numpy as np

blood_bank_coordinates = {
    'Dr Br. Ambedkar Hospital Blood Bank': (28.741133, 76.965237),
    'Saroj Super Speciality Hospital': (28.7062292, 77.126557),
    'Brahm Prakash Blood Bank': (28.7133405, 77.0767417),
    'Mission Jan Jagriti Blood Bank': (28.6812557, 77.0796011),
    'Lions Blood Bank': (28.7040649, 77.1598121),
}

blood_groups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

np.random.seed(0)
blood_bank_data = []
for blood_bank, coordinates in blood_bank_coordinates.items():
    blood_group_counts = {blood_group: np.random.randint(0, 50) for blood_group in blood_groups}
    blood_bank_data.append({
        'Blood Bank': blood_bank,
        'Latitude': coordinates[0],
        'Longitude': coordinates[1],
        **blood_group_counts
    })

df = pd.DataFrame(blood_bank_data)

delhi_map = folium.Map(location=[28.6139, 77.2090], zoom_start=10)

marker_cluster = MarkerCluster().add_to(delhi_map)
for index, row in df.iterrows():
    popup_html = f"<strong>{row['Blood Bank']}</strong><br>"
    for blood_group in blood_groups:
        popup_html += f"{blood_group}: {row[blood_group]}<br>"
    popup_html += "<br><div style='background-color: orange; padding: 5px; border-radius: 5px;'><a href='/order'>ORDER</a></div>"
    
    folium.Marker(
        location=[row['Latitude'], row['Longitude']],
        popup=popup_html,
        icon=folium.Icon(color='gray', icon='info-sign')
    ).add_to(marker_cluster)

delhi_map.save('delhi_blood_bank_map.html')