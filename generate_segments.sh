ffmpeg -i input.mp4 \
       -c:a aac -b:a 128k \
       -c:v h264 -profile:v main -crf 16 \
       -g 48 -keyint_min 48 \
       -hls_time 10 -hls_playlist_type vod \
       -b:v 1500k -maxrate 1800k -bufsize 3000k \
       -hls_segment_filename 'segment_%03d.ts' \
       output.m3u8
