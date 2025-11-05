export default function ActuallyArea() {
  return (
    <section className="actually-area" style={{
      marginTop: '0', 
      marginBottom: '-350px', 
      paddingTop: '55vh',
      paddingBottom: '25vh',
      background: 'transparent',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-start'
    }}>
      <div className="actually-area-inner" style={{paddingBottom: '0', marginBottom: '0', width: '100%'}}>
        <div className="container">
          <div className="bg-area" style={{display: 'none'}}></div>
          <h2 className="section-title font-sequelsans-romanbody t_line">
            What services <br />
            we provide you <br />
            actually
          </h2>
        </div>
      </div>
    </section>
  );
}
