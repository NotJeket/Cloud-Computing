import os

file_list = os.listdir('/shared_files')
print("List of files:")
for file in file_list:
    print(file)
