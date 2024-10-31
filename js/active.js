<script>
    document.querySelectorAll('.menu-1 ul li a').forEach(function(link) {
        link.addEventListener('click', function() {
            document.querySelector('.menu-1 ul li.active').classList.remove('active'); // Hapus kelas active dari item yang ada
            this.parentElement.classList.add('active'); // Tambahkan kelas active ke item yang diklik
        })
    });
</script>