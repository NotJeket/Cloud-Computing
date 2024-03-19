#!/bin/bash
while true; do
    timestamp=$(date +%s)
    echo "File_$timestamp.txt" >> /shared_files/file_list.txt
    touch /shared_files/File_$timestamp.txt
    sleep 1
done
